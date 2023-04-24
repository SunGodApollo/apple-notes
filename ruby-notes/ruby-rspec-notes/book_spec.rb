## this is where all the tests will belong
#import dependencies from rspec file
require 'rspec'
require_relative 'book.rb' # - what file you're referring to
require_relative 'library.rb'


# simple anatomy of a test in RSpec

# describe 'Class' do
#     it 'does stuff' do
#         expect  .matcher
#     end
# end


describe 'Book' do
    it 'when a book is instantiated' do
        expect{ Book.new }.not_to raise_error
    end

    it 'has a title' do
        #Provide an instance of a book
        my_book = Book.new
        my_book.title = 'Brave New World'
        expect(my_book.title).to be_a String
        expect(my_book.title).to eq 'Brave New World'
    end

    it 'has an author' do
        my_book = Book.new
        my_book.author = 'Alodus Huxley'
        expect(my_book.author).to be_a String
        expect(my_book.author).to eq 'Alodus Huxley'
    end

    it 'starts on page 1' do 
        my_book = Book.new
        expect(my_book.page).to eq 1
        expect(my_book.page).to be_a Integer
    end

    it 'can read pages' do
        my_book = Book.new
        expect{ my_book.read 5}.to change {my_book.page}.from(1).to(6)
    end
end

# curly brackets refer to a method, parentheses when referring to a data type


describe 'Library' do
    it 'has to be real' do
        expect{Library.new}.not_to raise_error
    end

    it 'has an array of books' do
        my_library = Library.new
        expect(my_library.book_collection).to be_a Array
    end

    it 'can add books to the array' do
        brave = Book.new
        hamlet = Book.new
        my_library = Library.new
        my_library.add_books(brave)
        my_library.add_books(hamlet)
        expect(my_library.book_collection).not_to be_empty
        expect(my_library.book_collection).to contain_exactly(brave, hamlet)

    end

end