using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace Porto.Models
{
    public partial class Produto
    {
        public Produto()
        {
            ItemViagem = new HashSet<ItemViagem>();
        }

        public int ProdutoId { get; set; }
        public string Descricao { get; set; }
        public string Unidade { get; set; }
        public DateTime? DtCadastro { get; set; }
        public DateTime? DtAtualizacao { get; set; }

        [JsonIgnore]
        public ICollection<ItemViagem> ItemViagem { get; set; }
    }
}
