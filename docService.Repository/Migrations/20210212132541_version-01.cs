using Microsoft.EntityFrameworkCore.Migrations;

namespace docService.Repository.Migrations
{
    public partial class version01 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "HorasServico",
                table: "Contratos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HorasServico",
                table: "Contratos");
        }
    }
}
