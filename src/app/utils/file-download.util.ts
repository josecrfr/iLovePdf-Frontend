export class FileDownloadUtil {

  /**
   * Descarga un archivo desde un Blob
   * @param blob archivo recibido del backend
   * @param filename nombre del archivo a descargar
   */
  static downloadBlob(blob: Blob, filename: string): void {

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    window.URL.revokeObjectURL(url);
  }
}