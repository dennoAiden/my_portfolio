from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from models import db, Contact
import os

app = Flask(__name__)
CORS(app)
api = Api(app)

# PostgreSQL database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv(
    'DATABASE_URL',
    'postgresql://postgres:1234@localhost:5432/portfolio_db'
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)


# ----------------- RESTful Resources ----------------- #
class ContactListResource(Resource):
    def get(self):
        """Fetch all contact messages"""
        contacts = Contact.query.order_by(Contact.created_at.desc()).all()
        return [c.to_dict() for c in contacts], 200

    def post(self):
        """Add new contact message"""
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        if not name or not email or not message:
            return {"error": "All fields are required"}, 400

        new_contact = Contact(name=name, email=email, message=message)
        db.session.add(new_contact)
        db.session.commit()

        return {"message": "Message submitted successfully!"}, 201


class ContactResource(Resource):
    def get(self, contact_id):
        """Get single contact by ID"""
        contact = Contact.query.get_or_404(contact_id)
        return contact.to_dict(), 200

    def delete(self, contact_id):
        """Delete a contact"""
        contact = Contact.query.get_or_404(contact_id)
        db.session.delete(contact)
        db.session.commit()
        return {"message": f"Contact {contact_id} deleted"}, 204


# Register routes
api.add_resource(ContactListResource, '/contacts')
api.add_resource(ContactResource, '/contacts/<int:contact_id>')


@app.route('/')
def home():
    return jsonify({"message": "Portfolio Backend API is running!"})


if __name__ == '__main__':
    app.run(debug=True)
