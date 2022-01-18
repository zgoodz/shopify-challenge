class ItemsController < ApplicationController

    def index
        render json: Item.all, status: :ok 
    end

    def create
        item = Item.create!(item_params)
        render json: Item.all, status: :created
    end

    def show
        render json: Item.find_by(id: params[:id]), status: :ok
    end

    def update
        item = Item.find_by(id: params[:id])
        item.update!(item_params)
        render json: item, status: :accepted
    end

    def destroy
        item = Item.find_by(id: params[:id])
        item.destroy
        head :no_content
    end

    private

    def item_params
        params.permit(:name, :quantity, :tag)
    end
end
