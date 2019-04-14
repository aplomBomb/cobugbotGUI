class InsultsController < ApplicationController
  def home

  end
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

    if insult.save
      redirect_to insults_path
    else
      render 'new'
    end

  end

  def edit
    @insult = Insult.find(params[:id])
    render :edit
  end

  def update
    @insult = Insult.find(params[:id])
    @insult.update(insult_params)

    if @insult.save
      redirect_to insults_path
    else
      render 'edit'
    end

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

