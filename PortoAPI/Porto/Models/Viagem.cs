using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace Porto.Models
{
    public partial class Viagem
    {
        public Viagem()
        {
            ItemViagem = new HashSet<ItemViagem>();
        }

        public int ViagemId { get; set; }
        public string Origem { get; set; }
        public string Destino { get; set; }
        public DateTime? DtPartida { get; set; }
        public DateTime? DtPlanejado { get; set; }
        public DateTime? DtChegada { get; set; }
        public int? NavioId { get; set; }
        public DateTime? DtCadastro { get; set; }
        public DateTime? DtAtualizacao { get; set; }

        public Navio Navio { get; set; }

        [JsonIgnore]
        public ICollection<ItemViagem> ItemViagem { get; set; }
    }
}
