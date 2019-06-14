using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Porto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Porto.Mapping
{
    public class ItemViagemMap : IEntityTypeConfiguration<ItemViagem>
    {
        public void Configure(EntityTypeBuilder<ItemViagem> entity)
        {
            
            entity.ToTable("item_viagem");

            entity.Property(e => e.ItemViagemId).HasColumnName("item_viagem_id");

            entity.Property(e => e.Carga)
                .HasColumnName("carga")
                .HasColumnType("numeric(18,2)");

            entity.Property(e => e.ContainerId).HasColumnName("container_id");

            entity.Property(e => e.DtAtualizacao).HasColumnName("dt_atualizacao");

            entity.Property(e => e.DtCadastro).HasColumnName("dt_cadastro");

            entity.Property(e => e.ProdutoId).HasColumnName("produto_id");

            entity.Property(e => e.ViagemId).HasColumnName("viagem_id");

            entity.HasOne(d => d.Container)
                .WithMany(p => p.ItemViagem)
                .HasForeignKey(d => d.ContainerId)
                .HasConstraintName("item_viagem_container_id_fkey");

            entity.HasOne(d => d.Produto)
                .WithMany(p => p.ItemViagem)
                .HasForeignKey(d => d.ProdutoId)
                .HasConstraintName("item_viagem_produto_id_fkey");

            entity.HasOne(d => d.Viagem)
                .WithMany(p => p.ItemViagem)
                .HasForeignKey(d => d.ViagemId);
        }
    }
}
