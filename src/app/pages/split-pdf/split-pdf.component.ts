import { Component } from '@angular/core';
import { SplitService } from 'src/app/services/split.service';
import { FileDownloadUtil } from 'src/app/utils/file-download.util';

@Component({
  selector: 'app-split-pdf',
  templateUrl: './split-pdf.component.html',
  styleUrls: ['./split-pdf.component.css'],
})
export class SplitPdfComponent {
  file: File | null = null;

  mode: string = 'EVERY_PAGE';

  range: string = '';

  loading = false;

  constructor(private splitService: SplitService) {}

  /**
   * Captura archivo seleccionado
   */
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (!file) return;

    this.file = file;

    console.log('📄 Archivo seleccionado:');
    console.log('Nombre:', file.name);
    console.log('Tipo:', file.type);
    console.log('Tamaño:', file.size);
  }

  /**
   * Llama al backend y descarga ZIP
   */
  async splitPdf(): Promise<void> {
    if (!this.file) {
      alert('Selecciona un PDF primero');
      return;
    }
    this.loading = true;
    try {
      const blob = await this.splitService.splitPdf(
        this.file,
        this.mode,
        this.range,
      );

      FileDownloadUtil.downloadBlob(blob, 'split-result.zip');
    } catch (error) {
      console.error('Error al dividir PDF:', error);
    } finally {
      this.loading = false;
    }
  }
}
