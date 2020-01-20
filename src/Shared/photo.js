export default class Photo {
  static b64tobinary(b64Data) {
    const byteCharacters = atob(b64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    return new Uint8Array(byteNumbers);
  }
  static toBlob(byteData){
    const blob = new Blob([byteData], {type: 'image/jpg'});
    return URL.createObjectURL(blob);
  }
}