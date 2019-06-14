using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Porto.Mapping;

namespace Porto.Models
{
    public partial class portodbContext : DbContext
    {
        public portodbContext()
        {
        }

        public portodbContext(DbContextOptions<portodbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Container> Container { get; set; }
        public virtual DbSet<ItemViagem> ItemViagem { get; set; }
        public virtual DbSet<Navio> Navio { get; set; }
        public virtual DbSet<Produto> Produto { get; set; }
        public virtual DbSet<Viagem> Viagem { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("Server=localhost;Database=portodb;Port=5433;User Id=postgres;Password=fcsroot;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ContainerMap());
            modelBuilder.ApplyConfiguration(new ItemViagemMap());
            modelBuilder.ApplyConfiguration(new NavioMap());
            modelBuilder.ApplyConfiguration(new ProdutoMap());
            modelBuilder.ApplyConfiguration(new ViagemMap());
        }
    }
}
