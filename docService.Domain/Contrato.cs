using System;
using System.ComponentModel.DataAnnotations;

namespace docService.Domain
{
    public class Contrato
    {
        
        public int Id { get; set; } 
        public string TipoServico { get; set; } 
        public string ValorTipoServico { get; set; }
        public string HorasServico {get; set;}
        public string cappService { get; set; }
        public string QtdCapp { get; set; } 
        public decimal ValorQtdCapp { get; set; }

        public string ValorTotalContrato { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime  DataFim { get; set; }
        public  decimal ValorContrato {get; set;}

         public int ClienteId { get; set; }
        
        public Cliente Cliente{ get;  }

    }
}