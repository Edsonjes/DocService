using System.Threading.Tasks;
using docService.Domain;

namespace docService.Repository
{
    public interface IDocServiceRepository
    {

        //Geral
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveChagesAsync();

        //Clientes
        Task<Cliente[]> GetAllClientesAsync(bool includeContratos);
        Task<Cliente> GetClientesById(int CilenteId, bool includeContratos);

        //Contratos
        Task<Contrato[]> GetAllContratosAsync();
        Task<Contrato> GetContratosById(int ContratoId, bool includeCliente);



    }
}