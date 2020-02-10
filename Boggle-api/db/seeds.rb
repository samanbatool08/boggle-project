# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

SubmittedWord.destroy_all
ValidWord.destroy_all
Game.destroy_all 

words = {}
File.open("/usr/share/dict/words") do |file|
  file.each do |line|
    # words[line.strip] = true
    ValidWord.create(word: line.strip)
  end
end

wordArray = words.keys
puts "word count: #{wordArray.length}"

p words["listen"]
p words["afgdt"]


Game.create(username: "Sally", points: 5)
Game.create(username: "Matt", points: 3)

SubmittedWord.create(words: "magic", game_id: 13)
SubmittedWord.create(words: "forever", game_id: 14)
# puts words.class
# puts wordArray.class


