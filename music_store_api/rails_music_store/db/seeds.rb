# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Album.delete_all()
Artist.delete_all()

a1 = Artist.create( {name: 'Coldplay'} )
a2 = Artist.create( {name: 'Miley Cyrus'} )

Album.create( { artist_id: a1.id, name: 'X & Y', stock: 10 } )
Album.create( { artist_id: a2.id, name: 'Bangerz', stock: 13 } )