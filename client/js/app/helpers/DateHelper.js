class DateHelper {
  constructor() {
    throw new Error("Está classe não pode ser intanciada");
  }

  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
      throw new Error("A data deve estar no formato ano/mês/dia");
    }

    return new Date(
      ...texto.split("-").map((item, indice) => {
        if (indice === 1) {
          return item - 1;
        } else {
          return item;
        }
      })
    );
  }
}
