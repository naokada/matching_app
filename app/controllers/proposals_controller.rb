class ProposalsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :set_proposal, only: [:show, :edit, :update, :destroy]
  before_action :set_env, only: [:new, :create, :index, :show, :edit, :update]

  # GET /proposals
  # GET /proposals.json
  def index
    @proposals = Proposal.where(end_time:Time.zone.now..(Date.today+1).end_of_day)

    # binding.pry
  end

  # GET /proposals/1
  # GET /proposals/1.json
  def show
  end

  # GET /proposals/new
  # TODO varidate date
  def new
    # gon.maps_api = ENV['MAPS_KEY']
    @proposal = Proposal.new
    @place = Place.new
  end

  # GET /proposals/1/edit
  def edit
  end

  # POST /proposals
  # POST /proposals.json
  def create
    @place = Place.create(place_params)
    @proposal = Proposal.new(proposal_params)
    # binding.pry

    respond_to do |format|
      if @proposal.save && @place.update(proposal_id: @proposal.id)
        format.html { redirect_to @proposal, notice: 'Proposal was successfully created.' }
        format.json { render :show, status: :created, location: @proposal }
      else
        format.html { render :new }
        format.json { render json: @proposal.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /proposals/1
  # PATCH/PUT /proposals/1.json
  def update
    respond_to do |format|
      if @proposal.update(proposal_params)
        format.html { redirect_to @proposal, notice: 'Proposal was successfully updated.' }
        format.json { render :show, status: :ok, location: @proposal }
      else
        format.html { render :edit }
        format.json { render json: @proposal.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /proposals/1
  # DELETE /proposals/1.json
  def destroy
    @proposal.destroy
    respond_to do |format|
      format.html { redirect_to proposals_url, notice: 'Proposal was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_proposal
      @proposal = Proposal.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def proposal_params
      params.require(:proposal).permit(:detail, :end_time);
    end

    def place_params
      # binding.pry
      params.require(:place).permit(:name, :place_url, :point, :image_url);
    end

    def set_env
      gon.maps_api = ENV['MAPS_KEY']
      headers['Access-Control-Allow-Origin'] = 'https://maps.googleapis.com/*'
    end
end
