class ArtistsController < ApplicationController

  def index
    artists = Artist.all
    # render :json => artists 
    render :json => artists.as_json( { include: :albums } ) 
  end

  def show
    artist = Artist.find( params[:id] )
    render :json => artist.as_json( { include: :albums } ) 
  end

  def create
    artist = Artist.create( params.require(:artist).permit([:name]) )
    render :json => artist.as_json( { include: :albums } )
  end

end