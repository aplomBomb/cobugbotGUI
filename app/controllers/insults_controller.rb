class InsultsController < ApplicationController
  def index
    @insults = Insult.all
  end

  def show
  end

  def new
  end

  def edit
  end
end
