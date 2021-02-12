using System.Linq;
using System.Threading.Tasks;
using docService.Domain;
using Microsoft.EntityFrameworkCore;

namespace docService.Repository
{
    public class DocServiceRepository : IDocServiceRepository
    {
        public DocServiceContext _context { get; }

        public DocServiceRepository(DocServiceContext context)
        {
            _context = context;
        }

        //GERAIS
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);

        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
           _context.Remove(entity);
        }
        //CLIENTE

        public async Task<Cliente[]> GetAllClientesAsync( bool includeContratos = false )
        {
            IQueryable<Cliente> query = _context.Clientes
            .Include (c => c.Contrato);

            query = query.OrderBy(c => c.Id);

            return await query.ToArrayAsync();
        }

        public async Task<Cliente> GetClientesById(int CilenteId, bool includeContratos = false)
        {
           IQueryable<Cliente> query = _context.Clientes
            .Include (c => c.Contrato);

            

            query = query.OrderBy(c => c.Id).Where(c => c.Id == CilenteId);

            return await query.FirstOrDefaultAsync();
        }

        //CONTRATO

        public async Task<Contrato[]> GetAllContratosAsync()
        {
            IQueryable<Contrato> query = _context.Contratos
            .Include (c => c.Cliente);

            query = query.OrderBy(c => c.Id);

            return await query.ToArrayAsync();
        }


        public async Task<Contrato> GetContratosById(int ContratoId, bool includeCliente)
        {
            IQueryable<Contrato> query = _context.Contratos
            .Include(c => c.Cliente);

            query = query.OrderBy(c => c.Id).Where(c => c.Id == ContratoId);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<bool> SaveChagesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }


    }
}