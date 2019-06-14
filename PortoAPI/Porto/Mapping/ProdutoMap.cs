using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Porto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Porto.Mapping
{
    public class ProdutoMap : IEntityTypeConfiguration<Produto>
    {
        public void Configure(EntityTypeBuilder<Produto> entity)
        {
            entity.ToTable("produto");

            entity.Property(e => e.ProdutoId).HasColumnName("produto_id");

            entity.Property(e => e.Descricao)
                .HasColumnName("descricao")
                .HasMaxLength(100);

            entity.Property(e => e.DtAtualizacao).HasColumnName("dt_atualizacao");

            entity.Property(e => e.DtCadastro).HasColumnName("dt_cadastro");

            entity.Property(e => e.Unidade)
                .HasColumnName("unidade")
                .HasMaxLength(20);
        }
    }
}
