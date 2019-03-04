class InsultsController < ApplicationController
  def index
    @insults = Insult.all
  end

  def show
    @insult = Insult.find(params[:id])
  end

  def new
    @insult = Insult.new
  end

  def create
    insult = Insult.create(insult_params)

    redirect_to insults_path
  end

  def edit
    @insult = Insult.find(params[:id])
    
  end

  def update
    @insult = Insult.find(params[:id])
    @insult.update(insult_params)

    redirect_to insult_path(@insult)
  end

  def destroy
    @insult = Insult.find(params[:id])
    @insult.destroy

    redirect_to insults_path
  end

  private

  def insult_params
    params.require(:insult).permit(:phrase, :contributor)
  end

end
