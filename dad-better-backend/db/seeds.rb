# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(
    username: "ChrisBaum89",
    name: "Chris",
    email: "c@gmail.com"
)

user2 = User.create(
    username: "BritB90",
    name: "Brit",
    email: "b@gmail.com"
)

child1 = Child.create(
    name: "Steve",
    birthday: "09/03/2018",
    gender: "male",
    user_id: "1"
)

child2 = Child.create(
    name: "Owen",
    birthday: "09/20/2019",
    gender: "male",
    user_id: "1"
)

child3 = Child.create(
    name: "Stacey",
    birthday: "03/20/2019",
    gender: "female",
    user_id: "2"
)