class Book
    attr_accessor :title, :author, :page
    def initialize
        @title = title
        @author = author
        @page = 1
    end


    def read(pages_read) #passing pages read as an argument and add that to page
        @page += pages_read
    end
end 