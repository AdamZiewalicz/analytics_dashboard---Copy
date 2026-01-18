using Microsoft.AspNetCore.Mvc;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MealsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MealsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/reports
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Meal>>> GetMeals()
        {
            return await _context.Meals.ToListAsync();
        }

        // POST: api/reports
        [HttpPost]
        public async Task<ActionResult<Meal>> CreateReport(Meal meal)
        {
            meal.create_time = DateTime.UtcNow;
            _context.Meals.Add(meal);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMeals), new { id = meal.id }, meal);
        }
    }
}
