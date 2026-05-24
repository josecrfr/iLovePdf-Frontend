import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SplitService {
  private apiURL = 'https://pdftools-backend-gzr1.onrender.com/api/pdf/split';

  /**
   * Divide un PDF y devuelve un ZIP
   */
  public async splitPdf(
    file: File,
    mode: string,
    range?: string,
  ): Promise<Blob> {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('mode', mode);

    if (range) {
      formData.append('range', range);
    }

    try {
      const response = await fetch(this.apiURL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        return Promise.reject(`Error HTTP: ${response.status}`);
      }

      const blob = await response.blob();
      return blob;
    } catch (error) {
      console.error('Error en splitPdf:', error);
      return Promise.reject(error);
    }
  }
}
