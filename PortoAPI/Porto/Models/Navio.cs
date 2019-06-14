using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace Porto.Models
{
    public partial class Navio
    {
        public Navio()
        {
            Viagem = new HashSet<Viagem>();
        }

        public int NavioId { get; set; }
        public string Descricao { get; set; }
        public int? Capacidade { get; set; }
        public DateTime? DtCadastro { get; set; }
        public DateTime? DtAtualizacao { get; set; }

        [JsonIgnore]
        public ICollection<Viagem> Viagem { get; set; }
    }
}
