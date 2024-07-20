import React from "react";

export const Profile = () => (

    <div className="container">
        <div className="row">
            <div className="col-md-12 py-4">
                <form className="w-50 mx-auto py-4">
                    <h3>Datos del Perfil</h3>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readOnly disabled />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readOnly disabled />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Github</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readOnly disabled />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Linkedin</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readOnly disabled />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Facebook</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readOnly disabled />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Instagram</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readOnly disabled />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readOnly disabled />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" readOnly disabled />
                    </div>
                </form>
            </div>
        </div>
    </div>
);