using Microsoft.EntityFrameworkCore;
using docService.Domain;

namespace docService.Repository
{
    public class DocServiceContext : DbContext
    {
        public DocServiceContext (DbContextOptions<DocServiceContext>options) : base (options) {}

        public DbSet<Cliente> Clientes {get; set;}

        public DbSet<Contrato> Contratos {get; set;}

        


            
    

    }
}