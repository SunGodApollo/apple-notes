class Library
    attr_accessor :book_collection
    def initialize
        @book_collection = []
    end

    def add_books(book)
        @book_collection << book
    end 
end