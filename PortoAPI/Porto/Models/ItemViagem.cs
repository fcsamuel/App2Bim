using System;
using System.Collections.Generic;

namespace Porto.Models
{
    public partial class ItemViagem
    {
        public int ItemViagemId { get; set; }
        public int? ViagemId { get; set; }
        public int? ContainerId { get; set; }
        public int? ProdutoId { get; set; }
        public decimal? Carga { get; set; }
        public DateTime? DtCadastro { get; set; }
        public DateTime? DtAtualizacao { get; set; }

        public Container Container { get; set; }
        public Produto Produto { get; set; }
        public Viagem Viagem { get; set; }
    }
}
