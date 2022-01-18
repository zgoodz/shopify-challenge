# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "Destroying old data"
Item.destroy_all

puts "Seeding new data"
Item.create(name: "Nerf Elite 2.0 Turbine CS-18", quantity: 20, tag: "Nerf")
Item.create(name: "Xbox Series S", quantity: 10, tag: "Videogame")
Item.create(name: "Xbox Series X", quantity: 5, tag: "Videogame")
Item.create(name: "Playstation 5", quantity: 0, tag: "Videogame")
Item.create(name: "Settlers of Catan", quantity: 10, tag: "Boardgame")
Item.create(name: "Monopoly", quantity: 10, tag: "Boardgame")

puts "✔ Done seeding!"