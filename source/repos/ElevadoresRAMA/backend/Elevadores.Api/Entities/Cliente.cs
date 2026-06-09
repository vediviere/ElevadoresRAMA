namespace Elevadores.Api.Entities
{
    public class Cliente
    {
        public int Id { get; set; }

        public string Nombre { get; set; } = string.Empty;

        public string? Rfc { get; set; }

        public string? Direccion { get; set; }

        public string? ContactoNombre { get; set; }

        public string? ContactoTelefono { get; set; }

        public string? ContactoCorreo { get; set; }

        public DateTime FechaRegistro { get; set; } = DateTime.UtcNow;

        public bool Activo { get; set; } = true;
    }
}
