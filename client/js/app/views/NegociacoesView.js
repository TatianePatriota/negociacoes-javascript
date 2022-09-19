class NegociacoesView extends View {
  constructor(elemento) {
    super(elemento);
  }

  template(model) {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
          <th>VOLUME</th>
        </tr>
      </thead>

      <tbody>
        ${model.negociacoes
          .map((negociacoes) => {
            return `
        <tr>
          <td>${DateHelper.dataParaTexto(negociacoes.data)}</td>
          <td>${negociacoes.quantidade}</td>
          <td>${negociacoes.valor}</td>
          <td>${negociacoes.volume}</td>
        </tr>
          `;
          })
          .join("")}
      </tbody>

      <tfoot>
        <td colspan="3"></td>
        <td>
          ${model.negociacoes.reduce((total, negociacoes) => {
            return total + negociacoes.volume;
          }, 0.0)}
        </td>
      </tfoot>
    </table>`;
  }
}
