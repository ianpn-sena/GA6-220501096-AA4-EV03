"use client";

// Define un componente que muestra información de un usuario individual
export default function Usuario({ data } : { data : any}) {
    console.log(data);

    // Regresa el HTML de este componente. Usa datos del parámetro "data".
    return (
        <>
            <h2 className="col-span-2 text-2xl font-extrabold mb-4">Usuario #{data.id}:</h2>

            <p className="text-right"><strong>Número de documento:</strong></p>
            <p className="text-start">{data.idNumber}</p>

            <p className="text-right"><strong>Email:</strong></p>
            <p className="text-start">{data.email}</p>

            <p className="text-right"><strong>Primer nombre:</strong></p>
            <p className="text-start">{data.firstName}</p>

            <p className="text-right"><strong>Segundo nombre:</strong></p>
            <p className="text-start">{data?.middleName}</p>

            <p className="text-right"><strong>Primer apellido:</strong></p>
            <p className="text-start">{data.firstLastName}</p>

            <p className="text-right"><strong>Segundo apellido:</strong></p>
            <p className="text-start">{data.secondLastName}</p>

            <p className="text-right"><strong>Número de teléfono:</strong></p>
            <p className="text-start">{data.phoneNumber}</p>

            <p className="text-right"><strong>País:</strong></p>
            <p className="text-start">{data.country}</p>

            <p className="text-right"><strong>Departamento:</strong></p>
            <p className="text-start">{data.department}</p>

            <p className="text-right"><strong>Ciudad:</strong></p>
            <p className="text-start">{data.city}</p>

            <p className="text-right"><strong>Dirección, primera línea:</strong></p>
            <p className="text-start">{data.address1}</p>

            <p className="text-right"><strong>Dirección, segunda línea:</strong></p>
            <p className="text-start">{data.address2}</p>

            <p className="text-right"><strong>Código ZIP:</strong></p>
            <p className="text-start">{data.zipCode}</p>

            <div className="col-span-2 mb-4"></div>
        </>
    );
};