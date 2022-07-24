class Cv < ApplicationRecord
belongs_to :job
def filename=(x)
name = x.original_filename
      directory = "public/cvs"
      # create the file path
      path = Rails.root.to_s+'/'+File.join(directory, name)
      p path
    # write the file
      File.open(path, "wb") { |f| f.write(params[:file].read) }
end
end
