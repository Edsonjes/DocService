using docService.Repository;
using Microsoft.AspNetCore.Mvc;
namespace docService.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContratoController : ControllerBase
    {
        public IDocServiceRepository _repo { get; }
        public ContratoController(IDocServiceRepository repo)
        {
            _repo = repo;
        }

        
    }
}