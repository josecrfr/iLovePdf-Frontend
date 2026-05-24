import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MergedService {

  private apiURL = 'https://pdftools-backend-gzr1.onrender.com/api/pdf/merge';

  /**
   * Une varios PDFs y devuelve un PDF final
   */
  public async mergePdfs(files: File[]): Promise<Blob> {

    const formData = new FormData();

    // 👇 importante: mismo nombre "files" para Spring MultipartFile[]
    files.forEach(file => {
      formData.append('files', file);
    });

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
      console.error('Error en mergePdfs:', error);
      return Promise.reject(error);
    }
  }
}