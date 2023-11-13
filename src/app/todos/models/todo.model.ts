export class Todo {
  public id: number;
  public texto: string;
  public completao: boolean

  constructor(texto: string){
    this.id = new Date().getTime();
    this.texto = texto
    this.completao = false
  }
}
