using System.Threading.Tasks;
using docService.Domain;
using docService.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace docService.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        public IDocServiceRepository _repo { get; }
        public ClienteController(IDocServiceRepository repo)
        {
            _repo = repo;

        }


        [HttpGet]

        public async Task<IActionResult> Get()
        {

            try
            {
                var results = await _repo.GetAllClientesAsync(true);
                return Ok(results);
            }
            catch (System.Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }

        }

        [HttpGet("{ClienteId}")]

        public async Task<IActionResult> Get(int ClienteId)
        {

            try
            {
                var results = await _repo.GetClientesById(ClienteId, true);
                return Ok(results);
            }
            catch (System.Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }

        }

        [HttpPost]

        public async Task<IActionResult> Post(Cliente model)
        {


            try
            {
                _repo.Add(model);

                if (await _repo.SaveChagesAsync())
                {
                    return Created($"/api/Cliente/{model.Id}", model);
                }
            }
            catch (System.Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }

            return BadRequest();


        }


        [HttpPut]

        public async Task<IActionResult> Put(int ClienteId, Cliente model)
        {


            try
            {

                var cliente = await _repo.GetClientesById(ClienteId, false);

                if (cliente == null) return NotFound();

                _repo.Update(model);

                if (await _repo.SaveChagesAsync())
                {
                    return Created($"/api/Cliente/{model.Id}", model);
                }
            }
            catch (System.Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }

            return BadRequest();


        }

        [HttpDelete]

        public async Task<IActionResult> Delete(int ClienteId)
        {


            try
            {

                var cliente = await _repo.GetClientesById(ClienteId, false);

                if (cliente == null) return NotFound();

                _repo.Delete(cliente);

                if (await _repo.SaveChagesAsync())
                {
                    return Ok();
                }
            }
            catch (System.Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }

            return BadRequest();


        }



    }
}