class Task
    attr_accessor :title, :description, :status
    def initialized
        @title = title
        @description = description
        @status = 'in progress'
    end

    def complete
        @status = 'completed'
        "#{title} is #{status}"
    end
end