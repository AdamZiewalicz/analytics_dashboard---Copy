using System;

namespace Backend.Models
{
    public class User
    {
        public required string id { get; set; }
        public DateTime created_at { get; set; }
        public required string username { get; set; }
        public required string password_hash { get; set; }
    }
}
