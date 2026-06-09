using Elevadores.Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace Elevadores.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Cliente> Clientes => Set<Cliente>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.ToTable("Clientes");

                entity.HasKey(x => x.Id);

                entity.Property(x => x.Nombre)
                    .IsRequired()
                    .HasMaxLength(150);

                entity.Property(x => x.Rfc)
                    .HasMaxLength(20);

                entity.Property(x => x.Direccion)
                    .HasMaxLength(250);

                entity.Property(x => x.ContactoNombre)
                    .HasMaxLength(150);

                entity.Property(x => x.ContactoTelefono)
                    .HasMaxLength(30);

                entity.Property(x => x.ContactoCorreo)
                    .HasMaxLength(150);
            });
        }
    }
}
