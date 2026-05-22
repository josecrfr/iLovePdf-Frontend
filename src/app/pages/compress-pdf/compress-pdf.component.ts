import { Component } from '@angular/core';
import { FileDownloadUtil } from 'src/app/utils/file-download.util';

@Component({
  selector: 'app-compress-pdf',
  templateUrl: './compress-pdf.component.html',
  styleUrls: ['./compress-pdf.component.css'],
})
export class CompressPdfComponent {
  file: File | null = null;
  targetKb: number | null = null;

  loading = false;

  onFileSelected(event: any) {
    const selectedFile: File = event.target.files[0];

    if (selectedFile) {
      this.file = selectedFile;
    }
  }

  async compressPdf() {
    if (!this.file || !this.targetKb) return;

    const formData = new FormData();

    formData.append('file', this.file);
    formData.append('targetKb', this.targetKb.toString());

    try {
      const response = await fetch('http://localhost:8080/api/pdf/compress', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const blob = await response.blob();

      FileDownloadUtil.downloadBlob(blob, 'compress-result.pdf');
    } catch (error) {
      console.error('Error al comprimir PDF:', error);
    }
  }
}
