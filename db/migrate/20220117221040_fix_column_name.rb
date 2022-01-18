class FixColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :items, :type, :tag
  end
end
