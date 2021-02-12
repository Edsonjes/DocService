using System.Collections.Generic;

namespace docService.Domain
{
    public class Cliente
    {
        public int Id { get; set; }
        public string NomeFantasia { get; set; }
        public int cnpj { get; set; }
        public string Responsavel { get; set; }
        public string Email { get; set; }
        public string Endereco { get; set; }
        public string Cep { get; set; }
        public string Telefone { get; set; }

        public List<Contrato> Contrato { get; set; }


    }
}