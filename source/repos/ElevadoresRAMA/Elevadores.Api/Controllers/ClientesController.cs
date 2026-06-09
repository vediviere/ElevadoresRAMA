using Elevadores.Api.Data;
using Elevadores.Api.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Elevadores.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Cliente>>> GetClientes()
        {
            var clientes = await _context.Clientes
                .Where(x => x.Activo)
                .OrderBy(x => x.Nombre)
                .ToListAsync();

            return Ok(clientes);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Cliente>> GetCliente(int id)
        {
            var cliente = await _context.Clientes.FindAsync(id);

            if (cliente is null || !cliente.Activo)
                return NotFound("Cliente no encontrado.");

            return Ok(cliente);
        }

        [HttpPost]
        public async Task<ActionResult<Cliente>> CrearCliente(Cliente cliente)
        {
            cliente.Id = 0;
            cliente.FechaRegistro = DateTime.UtcNow;
            cliente.Activo = true;

            _context.Clientes.Add(cliente);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCliente), new { id = cliente.Id }, cliente);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> ActualizarCliente(int id, Cliente cliente)
        {
            var clienteDb = await _context.Clientes.FindAsync(id);

            if (clienteDb is null || !clienteDb.Activo)
                return NotFound("Cliente no encontrado.");

            clienteDb.Nombre = cliente.Nombre;
            clienteDb.Rfc = cliente.Rfc;
            clienteDb.Direccion = cliente.Direccion;
            clienteDb.ContactoNombre = cliente.ContactoNombre;
            clienteDb.ContactoTelefono = cliente.ContactoTelefono;
            clienteDb.ContactoCorreo = cliente.ContactoCorreo;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> EliminarCliente(int id)
        {
            var clienteDb = await _context.Clientes.FindAsync(id);

            if (clienteDb is null || !clienteDb.Activo)
                return NotFound("Cliente no encontrado.");

            clienteDb.Activo = false;

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
