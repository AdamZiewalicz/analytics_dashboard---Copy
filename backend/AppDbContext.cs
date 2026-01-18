using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Report> Reports { get; set; }
        public DbSet<Meal> Meals { get; set; }
    }
}
