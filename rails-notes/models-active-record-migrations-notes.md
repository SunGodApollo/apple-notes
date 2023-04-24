Resources
[Ruby on Rails](https://guides.rubyonrails.org/)
$ rails help



- Generate a model 
    - model: Ruby class that is used to represent data
        - naming conventino: singular, PascalCase
    - $ rails generate model PartyAgenda role:string name:string
    - command creates model and migration   
    invoke  active_record
      create    db/migrate/20230413205153_create_party_agendas.rb
      create    app/models/party_agenda.rb


- Perform a migration
    - migration: used to alter the structure of the database (schema)
    - $ rails db:migrate
    - schema appears(created by rails)
    - table will be snake_case and plural(created by rails)

    == 20230413205153 CreatePartyAgendas: migrating ===============================
    -- create_table(:party_agendas)
   -> 0.0646s
    == 20230413205153 CreatePartyAgendas: migrated (0.0650s) ======================

- CRUD actions on data entries

CREATE
    - $ rails console
    - create entries
    > PartyAgenda.create(role: 'hula_dancer', name: 'Elmer')
    > PartyAgenda.create(role: 'hula_dancer', name: 'Dre')
    > PartyAgenda.create(role: 'hula_dancer', name: 'Felix')

READ
    -  PartyAgenda.all


UPDATE
 - store the active record query in a variable
 > fire = PartyAgenda.find_by(name: 'Felix)
 > fire.update(role: 'fire_twirler')


 ## adding a column
 - generate a migration 
 - $ rails generate migration AddConfirmedColumnToPartyAgenda

 - Add a change definition to the change method in the migration file
    - structure: add_column :table_name, :column_name, :datatype
        add_column :party_agendas, :confirmed, :string

    - Update Schema to show new column
        - $ rails db:migrate


# DELETE
$ rails db:drop -removes the testing and development
$ cd .. 
$ rm -rf <name of the rails app>




----------------------------------------------------------------------------------------------

Favorite Movies Challenge

Setup
Create a new Rails application called 'favorite_movies'.
Create the database
Generate a Movie model with a title attribute and a category attribute



Challenges
Add five entries to the database via the Rails console
Create a migration to add a new column to the database called movie_length
Update the values of the five existing attributes to include a movie_length value
Generate a migration to rename the column 'category' to 'genre'