import { Component } from '@angular/core';
import { FileDownloadUtil } from 'src/app/utils/file-download.util';

@Component({
  selector: 'app-merge-pdf',
  templateUrl: './merge-pdf.component.html',
  styleUrls: ['./merge-pdf.component.css'],
})
export class MergePdfComponent {
  files: File[] = [];

  loading = false;

  onFilesSelected(event: any) {
    const selectedFiles: FileList = event.target.files;

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];

      if (!this.files.find((f) => f.name === file.name)) {
        this.files.push(file);
      }
    }
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
  }

  async mergePdfs() {
    this.loading = true;
    const formData = new FormData();

    this.files.forEach((file) => {
      formData.append('files', file);
    });

    try {
      const response = await fetch('https://pdftools-backend-gzr1.onrender.com/api/pdf/merge', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error al unir PDFs');
      }

      const blob = await response.blob();

      FileDownloadUtil.downloadBlob(blob, 'merged-result.pdf');
    } catch (error) {
      console.error('Error al unir PDFs:', error);
    } finally {
      this.loading = false;
    }
  }
}
