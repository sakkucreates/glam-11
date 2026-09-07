import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const folder = searchParams.get("folder");

    if (!folder || typeof folder !== "string" || folder.trim() === "") {
      return NextResponse.json(
        { error: "Folder parameter is required." },
        { status: 400 }
      );
    }

    // Security & Path Traversal Prevention
    // Sanitize folder string: disallow path separators and relative path markers
    if (folder.includes("..") || folder.includes("/") || folder.includes("\\") || folder.includes("\0")) {
      return NextResponse.json(
        { error: "Invalid folder parameter." },
        { status: 400 }
      );
    }

    const downloadsDir = path.join(process.cwd(), "downloads");
    const zipFileName = folder.endsWith(".zip") ? folder : `${folder}.zip`;
    const targetPath = path.resolve(downloadsDir, zipFileName);

    // Verify path stays strictly inside the downloads directory
    if (!targetPath.startsWith(downloadsDir + path.sep)) {
      return NextResponse.json(
        { error: "Access denied. Target path outside downloads directory." },
        { status: 403 }
      );
    }

    if (!fs.existsSync(targetPath) || !fs.statSync(targetPath).isFile()) {
      return NextResponse.json(
        { error: "ZIP file not found." },
        { status: 404 }
      );
    }

    const fileBuffer = fs.readFileSync(targetPath);
    const downloadFilename = path.basename(targetPath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${encodeURIComponent(downloadFilename)}"`,
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error: any) {
    console.error("Download API Error:", error);
    return NextResponse.json(
      { error: "Failed to download ZIP file." },
      { status: 500 }
    );
  }
}
